---
type: method
interface: ICommentFolder
member: AddComment
returns: Comment
parameters:
  -
    name: Text
    type: System.String
    description: Comment to add to this folder
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IComment.Delete
  - IFeature.AddComment
  - IModelDocExtension.AddComment
keywords:
  - addcomment
  - icommentfolder
  - comment
  - folder
  - add
  - text
  - string
  - comments
  - vb
  - net
  - vba
---

# ICommentFolder.AddComment

Adds a comment to this folder.

## Signature

```csharp
Comment AddComment( 
   System.String
Text
)
```
## Parameters

- `Text` (System.String): Comment to add to this folder

## Return Value

Pointer to the IComment object

## Remarks

To see this comment, use
IFeatureManager::UpdateFeatureTree
to rebuild the FeatureManager design tree.

## Examples

- Get Comments in Comments Folder (C#) (Get_Comments_in_Comments_Folder_Example_CSharp.htm)
- Get Comments in Comments Folder (VB.NET) (Get_Comments_in_Comments_Folder_Example_VBNET.htm)
- Get Comments in Comments Folder (VBA) (Get_Comments_in_Comments_Folder_Example_VB.htm)

## See Also

- `IComment.Delete`
- `IFeature.AddComment`
- `IModelDocExtension.AddComment`