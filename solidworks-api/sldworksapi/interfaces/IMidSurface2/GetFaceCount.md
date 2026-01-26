---
type: method
interface: IMidSurface2
member: GetFaceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.GetFirstFace
  - IMidSurface2.GetFirstFaceArray
  - IMidSurface2.GetNextFace
  - IMidSurface2.GetNextFaceArray
  - IMidSurface2.IGetFirstFace
  - IMidSurface2.IGetFirstFaceArray
  - IMidSurface2.IGetNextFace
  - IMidSurface2.IGetNextFaceArray
keywords:
  - getfacecount
  - imidsurface2
  - mid
  - surface2
  - face
  - count
  - int32
---

# IMidSurface2.GetFaceCount

Obsolete. Superseded by IMidSurface3::GetFaceCount.

## Signature

```csharp
System.Int32 GetFaceCount()
```
## Parameters

None.

## Return Value

Number of faces in this midsurface feature

## Remarks

If more than one reference surface exists in the midsurface feature, then those faces are included in the total count returned.

## See Also

- `IMidSurface2.GetFirstFace`
- `IMidSurface2.GetFirstFaceArray`
- `IMidSurface2.GetNextFace`
- `IMidSurface2.GetNextFaceArray`
- `IMidSurface2.IGetFirstFace`
- `IMidSurface2.IGetFirstFaceArray`
- `IMidSurface2.IGetNextFace`
- `IMidSurface2.IGetNextFaceArray`