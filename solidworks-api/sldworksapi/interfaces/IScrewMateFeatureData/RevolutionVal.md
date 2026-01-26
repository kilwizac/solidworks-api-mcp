---
type: property
interface: IScrewMateFeatureData
member: RevolutionVal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - revolutionval
  - iscrewmatefeaturedata
  - screw
  - mate
  - feature
  - data
  - revolution
  - val
  - double
readonly: null
---

# IScrewMateFeatureData.RevolutionVal

Gets or sets either the number of revolutions one component makes for each unit length that the other component translates or the distance that one component translates for each revolution of the other component.

## Signature

```csharp
System.Double RevolutionVal {get; set;}
```
## Parameters

None.

## Return Value

Revolution value (see Remarks )

## Remarks

If
IScrewMateFeatureData::RevolutionType
is set to
swScrewMateDistanceOptions_e
:
swDistancePerRevolution, then specify this property with the distance that one component translates for each revolution of the other component.
swRevolutionsPerUnitLength, then specify this property with the number of revolutions of one component for each unit length that the other component translates. Set
swUserPreferencesIntegerValue_e
.swUnitsLinear to a unit length as defined in
swLengthUnit_e
.

## Examples

- IScrewMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScrewMateFeatureData)