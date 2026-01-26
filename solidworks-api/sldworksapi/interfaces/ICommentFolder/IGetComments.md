---
type: method
interface: ICommentFolder
member: IGetComments
returns: Comment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of comments in the folder
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICommentFolder.GetComments
keywords:
  - igetcomments
  - icommentfolder
  - comment
  - folder
  - comments
  - count
  - int32
  - getcommentcount
---

# ICommentFolder.IGetComments

Gets all of the comments in this folder.

## Signature

```csharp
Comment IGetComments( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of comments in the folder

## Return Value

in-process, unmanaged C++: Pointer to an array of IComment objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Examples

- ICommentFolder::GetCommentCount (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICommentFolder~GetCommentCount)

## See Also

- `ICommentFolder.GetComments`