---
type: method
interface: IPartDoc
member: CreateFeatureFromBody3
returns: System.Object
parameters:
  -
    name: Body
    type: System.Object
    description: Temporary body
  -
    name: MakeRefSurface
    type: System.Boolean
    description: If the body cannot be knitted to a solid or if a solid body already exists in this model, then True creates a reference surface feature
  -
    name: Options
    type: System.Int32
    description: Options as defined in swCreateFeatureBodyOpts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - geometry
  - parts
  - ui
related:
  - IPartDoc.ICreateFeatureFromBody4
keywords:
  - temporary
  - bodies
  - feature
  - see
  - also
  - ifeature
  - imported
  - createfeaturefrombody3
  - ipartdoc
  - part
  - doc
  - create
  - body3
  - body
  - object
  - make
  - ref
  - surface
  - boolean
  - options
  - int32
  - combine
  - assembly
  - components
  - vba
  - delete
  - faces
  - differences
  - between
  - parts
  - sectioned
  - save
  - rollbacked
  - parasolid
  - file
  - sheet
  - process
  - vb
  - net
  - blended
---

# IPartDoc.CreateFeatureFromBody3

Creates a new imported feature from the specified temporary body.

## Signature

```csharp
System.Object CreateFeatureFromBody3( 
   System.Object
Body
,
   System.Boolean
MakeRefSurface
,
   System.Int32
Options
)
```
## Parameters

- `Body` (System.Object): Temporary body
- `MakeRefSurface` (System.Boolean): If the body cannot be knitted to a solid or if a solid body already exists in this model, then True creates a reference surface feature
- `Options` (System.Int32): Options as defined in swCreateFeatureBodyOpts_e

## Return Value

Newly created imported feature or Nothing or NULL if the operation fails

## Remarks

This method is intended to be the final call in a knitting operation. The body that results from your knitting efforts can be converted into an imported body feature in the SOLIDWORKS model. This method is not limited to body objects obtained from knitting operations.
This method allows the application to decide how much additional work needs to be done to the model before creating the feature. The options listed in the swCreateFeatureBodyOpts_e enumeration can be OR'd together to provide additional checking or simplification of the model. If you specify swCreateFeatureBodySimplify for Options, then swCreateFeatureBodyCheck is implied.
If the application passes 0 for the options argument, then the options are disabled and the model is passed without any checking. If so, it is up to the application to ensure that the model is a valid model.
If this method fails, the error might be caused by creating a sheet (surface) body from a multiple shells body. If so, replace this method with
IPartDoc::CreateSurfaceFeatureFromBody
or
IPartDoc::ICreateSurfaceFeatureFromBody
.

## Examples

- Combine Assembly Components Into Part (VBA) (Combine_Assembly_Components_into_Part_Example_VB.htm)
- Delete Faces (VBA) (Delete_Faces_Example_VB.htm)
- Get Differences Between Parts (VBA) (Get_Differences_Between_Parts_Example_VB.htm)
- Get Sectioned Bodies (VBA) (Get_Sectioned_Bodies_Example_VB.htm)
- Save Rollbacked Part as Parasolid File (VBA) (Save_Roll_Backed_Part_as_Parasolid_File_Example_VB.htm)
- Create Sheet Body From Faces and Feature From Sheet Body (VBA) (Create_Sheet_Body_From_Faces_and_Feature_from_Sheet_Body_Example_VB.htm)
- Process Body (C#) (Process_Body_Example_CSharp.htm)
- Process Body (VB.NET) (Process_Body_Example_VBNET.htm)
- Process Body (VBA) (Process_Body_Example_VB.htm)
- Delete Blended Faces (C#) (Delete_Blended_Faces_Example_CSharp.htm)
- Delete Blended Faces (VB.NET) (Delete_Blended_Faces_Example_VBNET.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)

## See Also

- `IPartDoc.ICreateFeatureFromBody4`