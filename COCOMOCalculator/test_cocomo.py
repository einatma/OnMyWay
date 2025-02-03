from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Set up the WebDriver path
chromedriver_path = "path/to/chromedriver"  # <-- Update this path

# Initialize the WebDriver
driver = webdriver.Chrome(executable_path=chromedriver_path)
driver.get("file:///path/to/your/index.html")  # <-- Update this path

def test_organic_calculation():
    """Test calculation for an Organic project."""
    driver.find_element(By.ID, "kloc").clear()
    driver.find_element(By.ID, "kloc").send_keys("10")
    
    driver.find_element(By.ID, "eaf").clear()
    driver.find_element(By.ID, "eaf").send_keys("1.0")
    
    project_type = driver.find_element(By.ID, "project-type")
    project_type.send_keys("Organic")
    
    driver.find_element(By.TAG_NAME, "button").click()
    
    time.sleep(1)  # Wait for result update
    
    effort = driver.find_element(By.ID, "effort").text
    tdev = driver.find_element(By.ID, "tdev").text
    team = driver.find_element(By.ID, "team").text
    
    assert effort != "-", "Effort calculation failed"
    assert tdev != "-", "TDEV calculation failed"
    assert team != "-", "TEAM calculation failed"
    print("Test 1 Passed: Organic Calculation Successful")

def test_empty_fields():
    """Test that empty inputs prevent calculation."""
    driver.find_element(By.ID, "kloc").clear()
    driver.find_element(By.ID, "eaf").clear()
    
    driver.find_element(By.TAG_NAME, "button").click()
    time.sleep(1)
    
    effort = driver.find_element(By.ID, "effort").text
    tdev = driver.find_element(By.ID, "tdev").text
    team = driver.find_element(By.ID, "team").text
    
    assert effort == "-", "Calculation should not proceed with empty fields"
    assert tdev == "-", "Calculation should not proceed with empty fields"
    assert team == "-", "Calculation should not proceed with empty fields"
    print("Test 2 Passed: Empty Fields Validation Successful")

def test_different_project_types():
    """Test different project types return different results."""
    driver.find_element(By.ID, "kloc").clear()
    driver.find_element(By.ID, "kloc").send_keys("20")
    
    driver.find_element(By.ID, "eaf").clear()
    driver.find_element(By.ID, "eaf").send_keys("1.2")
    
    project_type = driver.find_element(By.ID, "project-type")
    
    # Test Organic
    project_type.send_keys("Organic")
    driver.find_element(By.TAG_NAME, "button").click()
    time.sleep(1)
    organic_effort = driver.find_element(By.ID, "effort").text

    # Test Semidetached
    project_type.send_keys("Semidetached")
    driver.find_element(By.TAG_NAME, "button").click()
    time.sleep(1)
    semidetached_effort = driver.find_element(By.ID, "effort").text

    assert organic_effort != semidetached_effort, "Different project types should yield different results"
    print("Test 3 Passed: Different Project Types Produce Different Results")

# Run tests
test_organic_calculation()
test_empty_fields()
test_different_project_types()

# Close the browser
driver.quit()
