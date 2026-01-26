---
type: method
interface: IMidSurface
member: IGetFirstFaceArray
returns: Face
parameters:
  -
    name: FromFrontFaceListDisp
    type: System.Intptr
    description: 
  -
    name: SizeOfFrontFaceList
    type: System.Int32
    description: 
  -
    name: FromFaceBackListDisp
    type: System.Intptr
    description: 
  -
    name: SizeOfBackFaceList
    type: System.Int32
    description: 
  -
    name: Thickness
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - igetfirstfacearray
  - imidsurface
  - mid
  - surface
  - first
  - face
  - array
  - front
  - list
  - disp
  - intptr
  - size
  - int32
  - back
  - thickness
  - double
---

# IMidSurface.IGetFirstFaceArray

Obsolete. Superseded by IMidSurface2::IGetFirstFaceArray.

## Signature

```csharp
Face IGetFirstFaceArray( 
   out System.IntPtr
FromFrontFaceListDisp
,
   out System.Int32
SizeOfFrontFaceList
,
   out System.IntPtr
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

- `FromFrontFaceListDisp` (System.Intptr): 
- `SizeOfFrontFaceList` (System.Int32): 
- `FromFaceBackListDisp` (System.Intptr): 
- `SizeOfBackFaceList` (System.Int32): 
- `Thickness` (System.Double): 

## Return Value

Unknown.