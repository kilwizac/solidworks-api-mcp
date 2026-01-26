---
type: method
interface: IModeler
member: ICreateBodyFromFaces3
returns: Body2
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to use to create the body
  -
    name: Faces
    type: Face2
    description: Array of faces
  -
    name: ActionType
    type: System.Int32
    description: Type of action as defined in swCreateFacesBodyAction_e
  -
    name: DoLocalCheck
    type: System.Boolean
    description: True to perform local checking on the resulting body, false to not
  -
    name: LocalCheckResult
    type: System.Boolean
    description: If DoLocalCheck is True, then True if body is okay, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - temporary
  - bodies
  - see
  - also
  - ibody2
  - faces
  - icreatebodyfromfaces3
  - imodeler
  - modeler
  - create
  - body
  - faces3
  - num
  - int32
  - face2
  - action
  - type
  - do
  - local
  - check
  - boolean
  - result
  - body2
---

# IModeler.ICreateBodyFromFaces3

Creates a temporary body from a list of faces.

## Signature

```csharp
Body2 ICreateBodyFromFaces3( 
   System.Int32
NumOfFaces
,
   ref Face2
Faces
,
   System.Int32
ActionType
,
   System.Boolean
DoLocalCheck
,
   out System.Boolean
LocalCheckResult
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to use to create the body
- `Faces` (Face2): Array of faces
- `ActionType` (System.Int32): Type of action as defined in swCreateFacesBodyAction_e
- `DoLocalCheck` (System.Boolean): True to perform local checking on the resulting body, false to not
- `LocalCheckResult` (System.Boolean): If DoLocalCheck is True, then True if body is okay, false if not

## Return Value

Unknown.

## Remarks

This method is useful when you attempt to copy a body with changes to that body. All of the input faces must be from the same body.
If you call this method to remove a hole, then the value that you specify for ActionType indicates to the modeler how to handle filling the hole. The result must be a solid.
This method is the opposite of
IBody2::DeleteFaces3
or
IBody2::IDeleteFaces3
, which allows you to specify faces to remove.

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`