---
type: property
interface: IScrewMateFeatureData
member: RevolutionType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - revolutiontype
  - iscrewmatefeaturedata
  - screw
  - mate
  - feature
  - data
  - revolution
  - type
  - int32
readonly: null
---

# IScrewMateFeatureData.RevolutionType

Gets or sets the type of revolution to specify for this screw mate.

## Signature

```csharp
System.Int32 RevolutionType {get; set;}
```
## Parameters

None.

## Return Value

Type of revolution as defined in swScrewMateDistanceOptions_e

## Remarks

If you set this property to swScrewMateDistanceOptions_e:
swDistancePerRevolution, then specify
IScrewMateFeatureData::RevolutionVal
with the distance that one component translates for each revolution of the other component.
swRevolutionsPerUnitLength, then specify IScrewMateFeatureData::RevolutionVal with the number of revolutions of one component for each unit length that the other component translates.

## Examples

- IScrewMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScrewMateFeatureData)