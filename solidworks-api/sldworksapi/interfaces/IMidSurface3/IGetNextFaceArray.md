---
type: method
interface: IMidSurface3
member: IGetNextFaceArray
returns: Face2
parameters:
  -
    name: FromFrontFaceListDisp
    type: Face2
    description: in-process,unmanaged C++: Pointer to an array of front faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: SizeOfFrontFaceList
    type: System.Int32
    description: Number of front faces
  -
    name: FromFaceBackListDisp
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of back faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: SizeOfBackFaceList
    type: System.Int32
    description: Number of back faces
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
  - IMidSurface3.GetNextFaceArray
keywords:
  - igetnextfacearray
  - imidsurface3
  - mid
  - surface3
  - next
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

# IMidSurface3.IGetNextFaceArray

Gets the next face from the original paired faces and the thickness between the faces.

## Signature

```csharp
Face2 IGetNextFaceArray( 
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

- `FromFrontFaceListDisp` (Face2): in-process,unmanaged C++: Pointer to an array of front faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `SizeOfFrontFaceList` (System.Int32): Number of front faces
- `FromFaceBackListDisp` (Face2): in-process, unmanaged C++: Pointer to an array of back faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `SizeOfBackFaceList` (System.Int32): Number of back faces
- `Thickness` (System.Double): Thickness between the faces

## Return Value

Next face

## Remarks

A separator is needed between the front faces and back faces. Thus, a NULL always exists between the front faces and the back faces.
For example, if there are five faces in the model, then the mid-surface has five faces. To get the five faces:
Call
IMidSurface3::IGetGetFirstFaceArray
once.
Call IMidSurface3::IGetNextFaceArray four times.
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
Call IMidSurface3::IGetFirstFaceArray to get the first face from the original paired faces.

## See Also

- `IMidSurface3.GetFaceCount`
- `IMidSurface3.GetFirstFaceArray`
- `IMidSurface3.GetNextFaceArray`