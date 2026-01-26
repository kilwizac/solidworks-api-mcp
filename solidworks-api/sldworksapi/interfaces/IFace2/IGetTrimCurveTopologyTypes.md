---
type: method
interface: IFace2
member: IGetTrimCurveTopologyTypes
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTrimCurveTopology
  - IFace2.GetTrimCurveTopologyCount
  - IFace2.GetTrimCurves2
  - IFace2.IGetTrimCurveSize2
keywords:
  - face
  - see
  - also
  - iface2
  - trimmed
  - topology
  - curve
  - igettrimcurvetopologytypes
  - face2
  - trim
  - types
  - int32
---

# IFace2.IGetTrimCurveTopologyTypes

Gets the trim curve topology type array for this face.

## Signature

```csharp
System.Int32 IGetTrimCurveTopologyTypes()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of longs indicating the topology types as defined in swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use
IFace2::GetTrimCurveTopology
or
IFace2::IGetTrimCurveTopology
to get the trim curve topology for this face.

## See Also

- `IFace2.GetTrimCurveTopology`
- `IFace2.GetTrimCurveTopologyCount`
- `IFace2.GetTrimCurves2`
- `IFace2.IGetTrimCurveSize2`