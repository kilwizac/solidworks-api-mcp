---
type: property
interface: ISketchPatternFeatureData
member: ReferencePoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - referencepoint
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - reference
  - point
  - object
readonly: null
---

# ISketchPatternFeatureData.ReferencePoint

Gets or sets the reference point for this sketch pattern feature.

## Signature

```csharp
System.Object ReferencePoint {get; set;}
```
## Parameters

None.

## Return Value

Reference point for this sketch pattern feature

## Remarks

This property is valid only if
ISketchPatternFeatureData::GetReferencePointType
does not return -1.
Before calling this property, call
ISketchPatternFeatureData::AccessSelections
or
ISketchPatternFeatureData::IAccessSelections2
to access the reference point.