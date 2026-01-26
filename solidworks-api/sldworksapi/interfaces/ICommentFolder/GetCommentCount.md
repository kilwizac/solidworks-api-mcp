---
type: method
interface: ICommentFolder
member: GetCommentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcommentcount
  - icommentfolder
  - comment
  - folder
  - count
  - int32
  - comments
  - vb
  - net
  - vba
---

# ICommentFolder.GetCommentCount

Gets the number of comments in this folder.

## Signature

```csharp
System.Int32 GetCommentCount()
```
## Parameters

None.

## Return Value

Number of comments in the folder

## Remarks

Call this method before calling
ICommentFolder::IGetComments
to determine the size of the array for that method.

## Examples

- Get Comments in Comments Folder (C#) (Get_Comments_in_Comments_Folder_Example_CSharp.htm)
- Get Comments in Comments Folder (VB.NET) (Get_Comments_in_Comments_Folder_Example_VBNET.htm)
- Get Comments in Comments Folder (VBA) (Get_Comments_in_Comments_Folder_Example_VB.htm)