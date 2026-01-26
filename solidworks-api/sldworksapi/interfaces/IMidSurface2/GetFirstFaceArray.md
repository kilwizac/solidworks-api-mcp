---
type: method
interface: IMidSurface2
member: GetFirstFaceArray
returns: System.Object
parameters:
  -
    name: Thickness
    type: System.Double
    description: Thickness between the faces
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.GetFaceCount
  - IMidSurface2.IGetFirstFaceArray
  - IMidSurface2.IGetNextFaceArray
keywords:
  - getfirstfacearray
  - imidsurface2
  - mid
  - surface2
  - first
  - face
  - array
  - thickness
  - double
  - object
---

# IMidSurface2.GetFirstFaceArray

Obsolete. Superseded by IMidSurface3::GetFirstFaceArray.

## Signature

```csharp
System.Object GetFirstFaceArray( 
   out System.Double
Thickness
)
```
## Parameters

- `Thickness` (System.Double): Thickness between the faces

## Return Value

First face

## Remarks

A separator is needed between the front faces and back faces. Thus, a NULL always exists between the front faces and the back faces.
For example, if there are five faces in the model, then the mid-surface has five faces. To get the five faces:
Call IMidSurface2::GetGetFirstFaceArray once.
Call
IMidSurface2::GetNextFaceArray
four times.
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
To get the next face from the original paired faces, call
IMidSurface2::GetNextFaceArray
.

## See Also

- `IMidSurface2.GetFaceCount`
- `IMidSurface2.IGetFirstFaceArray`
- `IMidSurface2.IGetNextFaceArray`