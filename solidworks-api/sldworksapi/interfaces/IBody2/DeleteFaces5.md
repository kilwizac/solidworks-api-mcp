---
type: method
interface: IBody2
member: DeleteFaces5
returns: System.Boolean
parameters:
  -
    name: FaceList
    type: System.Object
    description: Array containing the faces for deletion
  -
    name: HealAction
    type: System.Int32
    description: Healing action as defined in swHealActionType_e (see Remarks )
  -
    name: LoopProcessOption
    type: System.Int32
    description: Loop processing as defined in swLoopProcessOption_e (see Remarks )
  -
    name: DoLocalCheck
    type: System.Boolean
    description: True checks the bodies during the operation and sets the return value to indicate whether the resultant body is valid, false does not
  -
    name: BodyList
    type: System.Object
    description: Array of temporary bodies
  -
    name: LocalCheckResult
    type: System.Boolean
    description: True if body is valid, false if not; to obtain this value, you must pass true for the DoLocalCheck argument
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteBlends3
  - IBody2.EnumFaces
  - IBody2.GetFaceCount
  - IBody2.GetFirstFace
  - IBody2.IDeleteBlends3
  - IBody2.IGetFaces
  - IBody2.IGetFirstFace
keywords:
  - face
  - see
  - also
  - iface2
  - delete
  - faces
  - bodies
  - ibody2
  - patch
  - deletefaces5
  - body2
  - faces5
  - list
  - object
  - heal
  - action
  - int32
  - loop
  - process
  - option
  - do
  - local
  - check
  - boolean
  - body
  - result
  - create
  - new
  - part
  - existing
  - using
  - temporary
  - vb
  - net
  - vba
---

# IBody2.DeleteFaces5

Deletes a set of faces from a temporary body.

## Signature

```csharp
System.Boolean DeleteFaces5( 
   System.Object
FaceList
,
   System.Int32
HealAction
,
   System.Int32
LoopProcessOption
,
   System.Boolean
DoLocalCheck
,
   out System.Object
BodyList
,
   out System.Boolean
LocalCheckResult
)
```
## Parameters

- `FaceList` (System.Object): Array containing the faces for deletion
- `HealAction` (System.Int32): Healing action as defined in swHealActionType_e (see Remarks )
- `LoopProcessOption` (System.Int32): Loop processing as defined in swLoopProcessOption_e (see Remarks )
- `DoLocalCheck` (System.Boolean): True checks the bodies during the operation and sets the return value to indicate whether the resultant body is valid, false does not
- `BodyList` (System.Object): Array of temporary bodies
- `LocalCheckResult` (System.Boolean): True if body is valid, false if not; to obtain this value, you must pass true for the DoLocalCheck argument

## Return Value

True if set of faces are deleted, false if not

## Remarks

When faces are deleted, wounds are created on those faces that require healing. Healing can be accomplished by extending neighboring faces, shrinking the deleted faces, or covering the wounds. The value that you specify for HealAction determines how wounds are healed.
When a wound has multiple loops, you can tell SOLIDWORKS how to process the loops individually or together, or you can let SOLIDWORKS decide how to process the loops. The value you specify for LoopProcessAction determines how to process multiple loops.
For example, consider a cube with a through hole made up of four faces (a square hole). To delete these four faces, specify swHealAction_Shrink for HealAction and swLoopProcess_Together for LoopProcessAction because the loop on the first face to be deleted is dependent on the loop of the second face to be deleted. Likewise, the loop on the second face to be deleted is dependent on the third face to be deleted, and so on.
Now consider the same cube with a through hole, except this through hole is a simple cylinder (one face). To delete the cylindrical face, specify swHealActionShrink_e for HealAction and swLoopProcess_Independent for LoopProcessAction to heal the loops independently. This is necessary because the cylindrical face actually has two loops (one at either end of the cylinder) that need to be healed separately.
It is possible to generate invalid geometry when you use this method because checking is disabled. Call
IBody2::Check3
to verify that the body is a valid solid after using this method.
swLoopProcess_Together
swLoopProcess_Independent

## Examples

- Create New Part from Existing Part Using Temporary Body (VB.NET) (Create_New_Part_from_Existing_Part_Using_Temporary_Body_Example_VBNET.htm)
- Create New Part from Existing Part Using Temporary Body (VBA) (Create_New_Part_from_Existing_Part_Using_Temporary_Body_Example_VB.htm)
- Create New Part from Existing Part Using Temporary Body (C#) (Create_New_Part_from_Existing_Part_Using_Temporary_Body_Example_CSharp.htm)

## See Also

- `IBody2.DeleteBlends3`
- `IBody2.EnumFaces`
- `IBody2.GetFaceCount`
- `IBody2.GetFirstFace`
- `IBody2.IDeleteBlends3`
- `IBody2.IGetFaces`
- `IBody2.IGetFirstFace`