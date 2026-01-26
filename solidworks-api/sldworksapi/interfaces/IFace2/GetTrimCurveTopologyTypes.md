---
type: method
interface: IFace2
member: GetTrimCurveTopologyTypes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTrimCurveTopologyCount
  - IFace2.GetTrimCurves2
  - IFace2.IGetTrimCurveSize2
  - IFace2.IGetTrimCurveTopologyTypes
keywords:
  - face
  - see
  - also
  - iface2
  - trimmed
  - topology
  - curve
  - gettrimcurvetopologytypes
  - face2
  - trim
  - types
  - object
---

# IFace2.GetTrimCurveTopologyTypes

Gets the types of elements in the trim curve topology for this face.

## Signature

```csharp
System.Object GetTrimCurveTopologyTypes()
```
## Parameters

None.

## Return Value

Array of longs or integers (see Long vs. Integer ) indicating topology types as defined in swSelectType_e

## Remarks

Use
IFace2::GetTrimCurveTopology
or
IFace2::IGetTrimCurveTopology
to get the trim curve topology for this face.

## See Also

- `IFace2.GetTrimCurveTopologyCount`
- `IFace2.GetTrimCurves2`
- `IFace2.IGetTrimCurveSize2`
- `IFace2.IGetTrimCurveTopologyTypes`