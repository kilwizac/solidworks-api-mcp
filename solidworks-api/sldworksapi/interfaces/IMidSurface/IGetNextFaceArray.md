---
type: method
interface: IMidSurface
member: IGetNextFaceArray
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
  - igetnextfacearray
  - imidsurface
  - mid
  - surface
  - next
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

# IMidSurface.IGetNextFaceArray

Obsolete. Superseded by IMidSurface2::IGetNextFaceArray.

## Signature

```csharp
Face IGetNextFaceArray( 
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