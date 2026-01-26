---
type: method
interface: IModeler
member: SplitFaceOnParam
returns: System.Object
parameters:
  -
    name: Facedisp
    type: System.Object
    description: Face to split
  -
    name: UVFlag
    type: System.Int32
    description: Parametric axis; either swSplitFaceOnParamU or swSplitFaceOnParamV
  -
    name: Parameter
    type: System.Double
    description: Position along the parametric axis at which the split is performed
  -
    name: Status
    type: System.Boolean
    description: True if the operation was successful, false if
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.ISplitFaceOnParam2
  - IModeler.ISplitFaceOnParamCount2
keywords:
  - split
  - faces
  - face
  - see
  - also
  - iface2
  - splitfaceonparam
  - imodeler
  - modeler
  - param
  - facedisp
  - object
  - uv
  - flag
  - int32
  - parameter
  - double
  - status
  - boolean
---

# IModeler.SplitFaceOnParam

Splits and retrieves the faces on the U or V parameter

## Signature

```csharp
System.Object SplitFaceOnParam( 
   System.Object
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

- `Facedisp` (System.Object): Face to split
- `UVFlag` (System.Int32): Parametric axis; either swSplitFaceOnParamU or swSplitFaceOnParamV
- `Parameter` (System.Double): Position along the parametric axis at which the split is performed
- `Status` (System.Boolean): True if the operation was successful, false if

## Return Value

Array of new faces

## See Also

- `IModeler.ISplitFaceOnParam2`
- `IModeler.ISplitFaceOnParamCount2`