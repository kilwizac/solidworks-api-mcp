---
type: property
interface: IEdgeFlangeFeatureData
member: AutoReliefType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.ReliefDepth
  - IEdgeFlangeFeatureData.ReliefRatio
  - IEdgeFlangeFeatureData.ReliefTearType
  - IEdgeFlangeFeatureData.ReliefWidth
  - IEdgeFlangeFeatureData.UseReliefRatio
keywords:
  - auto
  - reliefs
  - bends
  - autorelieftype
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - relief
  - type
  - int32
readonly: null
---

# IEdgeFlangeFeatureData.AutoReliefType

Gets or sets the auto-relief type for this edge flange.

## Signature

```csharp
System.Int32 AutoReliefType {get; set;}
```
## Parameters

None.

## Return Value

Auto-relief type as defined in swSheetMetalReliefTypes_e

## Remarks

This property supports swSheetMetalReliefTypes_e.:
swSheetMetalReliefRectangular (default)
swSheetMetalReliefObround
swSheetMetalReliefTear

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.ReliefDepth`
- `IEdgeFlangeFeatureData.ReliefRatio`
- `IEdgeFlangeFeatureData.ReliefTearType`
- `IEdgeFlangeFeatureData.ReliefWidth`
- `IEdgeFlangeFeatureData.UseReliefRatio`