---
type: method
interface: IModeler
member: ISplitFaceOnParamCount2
returns: System.Int32
parameters:
  -
    name: Facedisp
    type: Face2
    description: Face to split
  -
    name: UVFlag
    type: System.Int32
    description: Parametric axis; either swSplitFaceOnParamU or swSplitFaceOnParamV
  -
    name: Parameter
    type: System.Double
    description: Position along the parametric axis at which the split will be performed
  -
    name: Status
    type: System.Boolean
    description: True if the operation was successful, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.SplitFaceOnParam
keywords:
  - split
  - faces
  - face
  - see
  - also
  - iface2
  - isplitfaceonparamcount2
  - imodeler
  - modeler
  - param
  - count2
  - facedisp
  - face2
  - uv
  - flag
  - int32
  - parameter
  - double
  - status
  - boolean
---

# IModeler.ISplitFaceOnParamCount2

Sets up and counts the number of new faces split on the U or V parameter.

## Signature

```csharp
System.Int32 ISplitFaceOnParamCount2( 
   Face2
Facedisp
,
   System.Int32
UVFlag
,
   System.Double
Parameter
,
   out System.Boolean
Status
)
```
## Parameters

- `Facedisp` (Face2): Face to split
- `UVFlag` (System.Int32): Parametric axis; either swSplitFaceOnParamU or swSplitFaceOnParamV
- `Parameter` (System.Double): Position along the parametric axis at which the split will be performed
- `Status` (System.Boolean): True if the operation was successful, false if not

## Return Value

Number of new faces

## Remarks

The split is defined by calling this method. Then, you can retrieve the list of new faces by using
IModeler::ISplitFaceOnParam2
.

## See Also

- `IModeler.SplitFaceOnParam`