---
type: method
interface: IMidSurface2
member: IGetFirstFaceArray
returns: Face2
parameters:
  -
    name: FromFrontFaceListDisp
    type: Face2
    description: List of front faces
  -
    name: SizeOfFrontFaceList
    type: System.Int32
    description: Number of front faces
  -
    name: FromFaceBackListDisp
    type: Face2
    description: List of back faces
  -
    name: SizeOfBackFaceList
    type: System.Int32
    description: Number of back faces
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
  - IMidSurface2.GetFirstFaceArray
  - IMidSurface2.GetNextFaceArray
keywords:
  - igetfirstfacearray
  - imidsurface2
  - mid
  - surface2
  - first
  - face
  - array
  - front
  - list
  - disp
  - face2
  - size
  - int32
  - back
  - thickness
  - double
---

# IMidSurface2.IGetFirstFaceArray

Obsolete. Superseded by IMidSurface3::IGetFirstFaceArray.

## Signature

```csharp
Face2 IGetFirstFaceArray( 
   out Face2
FromFrontFaceListDisp
,
   out System.Int32
SizeOfFrontFaceList
,
   out Face2
FromFaceBackListDisp
,
   out System.Int32
SizeOfBackFaceList
,
   out System.Double
Thickness
)
```
## Parameters

- `FromFrontFaceListDisp` (Face2): List of front faces
- `SizeOfFrontFaceList` (System.Int32): Number of front faces
- `FromFaceBackListDisp` (Face2): List of back faces
- `SizeOfBackFaceList` (System.Int32): Number of back faces
- `Thickness` (System.Double): Thickness between the faces

## Return Value

First face

## Remarks

A separator is needed between the front faces and back faces. Thus, a NULL always exists between the front faces and the back faces.
For example, if there are five faces in the model, then the mid-surface has five faces. To get the five faces:
Call IMidSurface2::IGetGetFirstFaceArray once.
Call
IMidSurface2::IGetNextFaceArray
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
IMidSurface2::IGetNextFaceArray
.

## See Also

- `IMidSurface2.GetFaceCount`
- `IMidSurface2.GetFirstFaceArray`
- `IMidSurface2.GetNextFaceArray`