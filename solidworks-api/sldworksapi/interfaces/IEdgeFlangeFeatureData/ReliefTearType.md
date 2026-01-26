---
type: property
interface: IEdgeFlangeFeatureData
member: ReliefTearType
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
  - IEdgeFlangeFeatureData.ReliefWidth
  - IEdgeFlangeFeatureData.UseReliefRatio
keywords:
  - reliefteartype
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - relief
  - tear
  - type
  - int32
readonly: null
---

# IEdgeFlangeFeatureData.ReliefTearType

Gets or sets the type of relief tear for this edge flange.

## Signature

```csharp
System.Int32 ReliefTearType {get; set;}
```
## Parameters

None.

## Return Value

Relief tear type as defined in swReliefTearType_e

## Remarks

This property is valid only if:
IEdgeFlangeFeatureData::UseDefaultBendRelief
is set to false,
- and -
IEdgeFlangeFeatureData::AutoReliefType
is set to swSheetMetalReliefTypes_e.swSheetMetalReliefTear.
The default value of this property is swReliefTearType_e.swReliefTearTypeRip.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.ReliefDepth`
- `IEdgeFlangeFeatureData.ReliefRatio`
- `IEdgeFlangeFeatureData.ReliefWidth`
- `IEdgeFlangeFeatureData.UseReliefRatio`