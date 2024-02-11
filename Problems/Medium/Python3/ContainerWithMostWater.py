# Let's use the provided function to test with the new heights array and see if it finds the true maximum area.
heights_test = [5,4,3,2,1,70,2,3,4,70]

# Re-using the previously defined function logic directly here for convenience
def max_water_area(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        current_area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, current_area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area

# Test with the new heights
max_water_area_test_result = max_water_area(heights_test)
max_water_area_test_result