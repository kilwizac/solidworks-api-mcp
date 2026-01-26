---
type: method
interface: IMidSurface3
member: GetFaceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.GetFaces
  - IMidSurface3.GetFirstFace
  - IMidSurface3.GetFirstFaceArray
  - IMidSurface3.GetNextFace
  - IMidSurface3.GetNextFaceArray
  - IMidSurface3.IGetFaces
  - IMidSurface3.IGetFirstFace
  - IMidSurface3.IGetFirstFaceArray
  - IMidSurface3.IGetNextFace
  - IMidSurface3.IGetNextFaceArray
keywords:
  - getfacecount
  - imidsurface3
  - mid
  - surface3
  - face
  - count
  - int32
  - insert
  - midsurface
  - component
  - vb
  - net
  - vba
---

# IMidSurface3.GetFaceCount

Gets the number of faces in the midsurface feature.

## Signature

```csharp
System.Int32 GetFaceCount()
```
## Parameters

None.

## Return Value

Number of faces in this midsurface feature, including a null face (separator) between the front and back face, which counts as one face

## Remarks

If more than one reference surface exists in the midsurface feature, then those faces are included in the total.

## Examples

- Insert MidSurface in Component (C#) (Insert_MidSurface_in_Component_Example_CSharp.htm)
- Insert MidSurface in Component (VB.NET) (Insert_MidSurface_in_Component_Example_VBNET.htm)
- Insert MidSurface in Component (VBA) (Insert_MidSurface_in_Component_Example_VB.htm)

## See Also

- `IMidSurface3.GetFaces`
- `IMidSurface3.GetFirstFace`
- `IMidSurface3.GetFirstFaceArray`
- `IMidSurface3.GetNextFace`
- `IMidSurface3.GetNextFaceArray`
- `IMidSurface3.IGetFaces`
- `IMidSurface3.IGetFirstFace`
- `IMidSurface3.IGetFirstFaceArray`
- `IMidSurface3.IGetNextFace`
- `IMidSurface3.IGetNextFaceArray`