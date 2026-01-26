---
type: method
interface: IMidSurface3
member: GetNextFaceArray
returns: System.Object
parameters:
  -
    name: Thickness
    type: System.Double
    description: Thickness between the faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.GetFaceCount
  - IMidSurface3.GetFirstFaceArray
  - IMidSurface3.IGetFirstFaceArray
  - IMidSurface3.IGetNextFaceArray
keywords:
  - getnextfacearray
  - imidsurface3
  - mid
  - surface3
  - next
  - face
  - array
  - thickness
  - double
  - object
---

# IMidSurface3.GetNextFaceArray

Gets the next face from the original paired faces and the thickness between the faces.

## Signature

```csharp
System.Object GetNextFaceArray( 
   out System.Double
Thickness
)
```
## Parameters

- `Thickness` (System.Double): Thickness between the faces

## Return Value

Next face

## Remarks

A separator is needed between the front faces and back faces. Thus, a NULL always exists between the front faces and the back faces.
For example, if there are five faces in the model, then the mid-surface has five faces. To get the five faces:
Call
IMidSurface3::GetGetFirstFaceArray
once.
Call IMidSurface2::GetNextFaceArray four times.
At each call, the data is arranged as follows if there is one front face in the array:
[
Neutral face
]
,
[
front face
]
, NULL,
[
back face
]
If there are more than one front face in the array, then the data is arranged as follows:
[
Neutral face
]
,
[
front face1, front face2
]
, NULL,
[
back face1, back face2
]
Call
IMidSurface3::GetFirstFaceArray
to get the first face from the original paired faces.

## See Also

- `IMidSurface3.GetFaceCount`
- `IMidSurface3.GetFirstFaceArray`
- `IMidSurface3.IGetFirstFaceArray`
- `IMidSurface3.IGetNextFaceArray`