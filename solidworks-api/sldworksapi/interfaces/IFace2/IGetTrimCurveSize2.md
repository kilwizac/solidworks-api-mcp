---
type: method
interface: IFace2
member: IGetTrimCurveSize2
returns: System.Int32
parameters:
  -
    name: WantCubic
    type: System.Int32
    description: True if the trim curves are to be cubic, false if not
  -
    name: WantNRational
    type: System.Int32
    description: True if the trim curves are to be non-rational, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTrimCurveTopology
  - IFace2.GetTrimCurveTopologyCount
  - IFace2.GetTrimCurveTopologyTypes
  - IFace2.IGetTrimCurveTopology
  - IFace2.IGetTrimCurveTopologyTypes
keywords:
  - face
  - see
  - also
  - iface2
  - trimmed
  - topology
  - curve
  - igettrimcurvesize2
  - face2
  - trim
  - size2
  - want
  - cubic
  - int32
  - rational
---

# IFace2.IGetTrimCurveSize2

Gets the size of the array required for IFace2::GetTrimCurves2

## Signature

```csharp
System.Int32 IGetTrimCurveSize2( 
   System.Int32
WantCubic
,
   System.Int32
WantNRational
)
```
## Parameters

- `WantCubic` (System.Int32): True if the trim curves are to be cubic, false if not
- `WantNRational` (System.Int32): True if the trim curves are to be non-rational, false if not

## Return Value

Size of the array required for IFace2::GetTrimCurves2

## See Also

- `IFace2.GetTrimCurveTopology`
- `IFace2.GetTrimCurveTopologyCount`
- `IFace2.GetTrimCurveTopologyTypes`
- `IFace2.IGetTrimCurveTopology`
- `IFace2.IGetTrimCurveTopologyTypes`