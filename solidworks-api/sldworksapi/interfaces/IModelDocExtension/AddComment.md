---
type: method
interface: IModelDocExtension
member: AddComment
returns: Comment
parameters:
  -
    name: Text
    type: System.String
    description: Comment to add to the document's Comment folder
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IComment.Delete
keywords:
  - comment
  - see
  - also
  - icomment
  - add
  - addcomment
  - imodeldocextension
  - model
  - doc
  - extension
  - text
  - string
  - assembly
  - component
  - vba
  - vb
  - net
---

# IModelDocExtension.AddComment

Adds a comment to this document's Comment Folder.

## Signature

```csharp
Comment AddComment( 
   System.String
Text
)
```
## Parameters

- `Text` (System.String): Comment to add to the document's Comment folder

## Return Value

Comment folder

## Remarks

A comment is added to the document's Comment folder, and the comment is associated with the preselected item when this method is run.
For example:
If...
Then the comment is...
A feature is preselected
Associated with the feature (equivalent to running the
IFeature::AddComment
on the selected feature)
The Comment folder is preselected
Not associated with any feature, but is added to the Comment folder (equivalent to running the
ICommentFolder::AddComment
method)
Although it might appear that ModelDocExtension::AddComment duplicates IFeature::AddComment and ICommentFolder::AddComment, IModelDocExtension::AddComment is used when recording macros, so it is different. I
ModelDocExtension::AddComment shares code with the user interface, so it should behave identical to the user interface.
IModelDocExtension::AddComment rebuilds the FeatureManager design tree automatically, which can be a time-consuming operation if the FeatureManager design tree gets large. Take this into consideration before using it.

## Examples

- Add Comment to Assembly Component (VBA) (Add_Comment_to_Assembly_Component_Example_VB.htm)
- Add Comment to Assembly Component (VB.NET) (Add_Comment_to_Assembly_Component_Example_VBNET.htm)
- Add Comment to Assembly Component (C#) (Add_Comment_to_Assembly_Component_Example_CSharp.htm)

## See Also

- `IComment.Delete`