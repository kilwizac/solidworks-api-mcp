---
type: property
interface: ILinearPatternFeatureData
member: GeometryPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - geometrypattern
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - geometry
  - boolean
readonly: null
---

# ILinearPatternFeatureData.GeometryPattern

Gets or sets whether to create the pattern using only the geometry (faces and edges) of the feature.

## Signature

```csharp
System.Boolean GeometryPattern {get; set;}
```
## Parameters

None.

## Return Value

True to use only the geometry of the feature to create the pattern (faster), false to pattern and solve each instance of the feature in its entirety (slower)

## Remarks

This property is valid only if
ILinearPatternFeatureData::BodyPattern
is false.
IIf this property is set to true, you can call
ILinearPatternFeatureData::SetFeatureScope
.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)