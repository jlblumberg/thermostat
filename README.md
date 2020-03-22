### [Makers Academy](http://www.makersacademy.com) - Week 5 Project

Thermostat challenge - original README [here](https://github.com/makersacademy/course/blob/master/thermostat/thermostat_logic.md)
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

[Outline](#Outline) | [Specifications](#Specifications) | [User Stories](#User_Stories) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

Build the logic needed to model a simple thermostat.

## <a name="Specifications">Specifications</a>

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- Low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.

## <a name="User_Stories">User Stories</a>

```
As a homeowner, 
so that I can set the temperature in my home, 
I would like my thermostat set to a default of 20 degrees.

As a homeowner's daughter
so that I can warm up my bedroom,
I would like to increase the set temperature by a certain amount.

As a homeonwer,
so that I can not waste money, 
I would like to decrease the set temperature by a certain amount.

As a landlord,
so that the pipes don't freeze,
I would like to set a minimum temperature of 10 degrees. 

As a homeowner, 
so that I can save on bills,
I want a powersaving mode which will set maximum temperature to 25 degrees.

As a homeowner, 
so that I can turn the heat up on cold days,
If powersaving mode is off, I want the maximum temperature to be 32 degrees.

As a homeowner, 
so that I can easily return to baseline, 
I'd like a function to reset the temperature to 20.

As a homeowner,
So that I can gauge energy usage,
I'd like a function to tell me current usage levels (high/med/low).
```

## <a name="Installation_Instructions">Installation Instructions</a>

### Prerequisite setup:
- Clone this repo to your local machine and cd into it
- Open the index file in your browser to view the thermostat

### Testing
- Open the SpecRunner file in your browser

## <a name="Tech_stack">Tech stack</a>

Frontend:
- JavaScript
- JQuery

Backend:
- JStorage (for persisting data without a local database)
- OpenWeatherMap API to pull in weather from different cities

Testing:
- Jasmine

## <a name="Future_work">Future work</a>

This project was completed to specification, but in future I would like to add some more styling to make it more enticing to use.