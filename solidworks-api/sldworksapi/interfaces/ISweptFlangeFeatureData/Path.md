---
type: property
interface: ISweptFlangeFeatureData
member: Path
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweptFlangeFeatureData.CylindricalOrConicalEdge
  - ISweptFlangeFeatureData.FlattenAlongPath
  - ISweptFlangeFeatureData.GetPathType
keywords:
  - path
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - object
  - isheetmetalgaugetableparameters
readonly: null
---

# ISweptFlangeFeatureData.Path

Gets or sets the sweep path of this swept flange feature.

## Signature

```csharp
System.Object Path {get; set;}
```
## Parameters

None.

## Return Value

Array of edge s or a sketch of lines and arcs

## Remarks

If the sweep path is a closed loop, then
ISweptFlangeFeatureData::StartOffset
and
ISweptFlangeFeatureData::EndOffset
are not valid.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)
- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISweptFlangeFeatureData.CylindricalOrConicalEdge`
- `ISweptFlangeFeatureData.FlattenAlongPath`
- `ISweptFlangeFeatureData.GetPathType`