---
type: method
interface: IFace2
member: GetTrimCurveTopology
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
  - IFace2.IGetTrimCurveTopology
keywords:
  - face
  - see
  - also
  - iface2
  - trimmed
  - topology
  - curve
  - gettrimcurvetopology
  - face2
  - trim
  - object
---

# IFace2.GetTrimCurveTopology

Gets the trim curve topology for this face.

## Signature

```csharp
System.Object GetTrimCurveTopology()
```
## Parameters

None.

## Return Value

Array of coedges, vertices, and NULLs (see Remarks )

## Remarks

This method returns a list of coedges, vertices, and NULLs. You must call
IFace2::GetTrimCurves2
or
IFace2::IGetTrimCurves2
before calling this method.
This method returns a list of proper edges corresponding to the list of SP curves from IFace2::GetTrimCurves2 or IFace2::IGetTrimCurves2. Otherwise, this method prompts the user for the list of edges that the software thinks are on the face. These two lists differ in order and content.
Use
IFace2::GetTrimCurveTopologyTypes
or
IFace2::IGetTrimCurveTopologyTypes
to get an array of types corresponding to the returned objects.

## See Also

- `IFace2.GetTrimCurveTopologyCount`
- `IFace2.IGetTrimCurveTopology`