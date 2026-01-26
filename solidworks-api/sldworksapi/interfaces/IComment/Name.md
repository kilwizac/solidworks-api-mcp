---
type: property
interface: IComment
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - name
  - icomment
  - comment
  - string
  - comments
  - folder
  - vb
  - net
  - vba
readonly: null
---

# IComment.Name

Gets or sets the name of the comment as it appears in the FeatureManager design tree.

## Signature

```csharp
System.String Name {get; set;}
```
## Parameters

None.

## Return Value

Name of the comment as it appears in the FeatureManager design tree

## Remarks

You cannot set this property if the comment is owned by a feature because the name of the comment always matches the name of the feature that owns it. To determine if a comment is owned by a feature, use
IComment::FeatureOwner
.
You must rebuild the FeatureManager design tree after setting the name of a comment. Use
IFeatureManager::UpdateFeatureTree
to perform this action.

## Examples

- Get Comments in Comments Folder (C#) (Get_Comments_in_Comments_Folder_Example_CSharp.htm)
- Get Comments in Comments Folder (VB.NET) (Get_Comments_in_Comments_Folder_Example_VBNET.htm)
- Get Comments in Comments Folder (VBA) (Get_Comments_in_Comments_Folder_Example_VB.htm)