---
type: property
interface: IStraightElementData
member: ClassificationType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - classificationtype
  - istraightelementdata
  - straight
  - element
  - data
  - classification
  - type
  - int32
readonly: null
---

# IStraightElementData.ClassificationType

Gets or sets the classification type of this straight hole element.

## Signature

```csharp
System.Int32 ClassificationType {get; set;}
```
## Parameters

None.

## Return Value

Classification type as defined in swStraightHoleClassificationType_e

## Remarks

This property is valid only if
IAdvancedHoleElementData::FastenerType
is set to
swWzdHoleStandardFastenerTypes_e
.swStandard*DowelHoles.