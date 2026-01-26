---
type: method
interface: ISldWorks
member: RemoveFileOpenItem2
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: MethodName
    type: System.String
    description: Name of the application function used to open the file as specified in ISldWorks::AddFileOpenItem3
  -
    name: Description
    type: System.String
    description: File description in the Save as type list
  -
    name: Extension
    type: System.String
    description: File name extension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.AddFileSaveAsItem2
  - ISldWorks.RemoveFileSaveAsItem2
keywords:
  - filename
  - extensions
  - remove
  - file
  - open
  - removefileopenitem2
  - isldworks
  - sld
  - works
  - item2
  - cookie
  - int32
  - name
  - string
  - description
  - extension
  - boolean
  - add
  - items
  - save
  - menus
  - vb
  - net
---

# ISldWorks.RemoveFileOpenItem2

Removes a file type from the File &gt; Open dialog box that was added using ISldWorks::AddFileOpenItem3.

## Signature

```csharp
System.Boolean RemoveFileOpenItem2( 
   System.Int32
Cookie
,
   System.String
MethodName
,
   System.String
Description
,
   System.String
Extension
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `MethodName` (System.String): Name of the application function used to open the file as specified in ISldWorks::AddFileOpenItem3
- `Description` (System.String): File description in the Save as type list
- `Extension` (System.String): File name extension

## Return Value

True if the file type is removed from the Save as type list, false if not

## Remarks

Call this method in your add-in's DisconnectFromSW method.

## Examples

- Add and Remove Items to File Save As and Open Menus (VB.NET) (Add_and_Remove_Items_to_File_Save_As_and_Open_Menus_VBNET.htm)
- Add and Remove Items to File Save As and Open Menus (C#) (Add_and_Remove_Items_to_File_Save_As_and_Open_Menus_CSharp.htm)

## See Also

- `ISldWorks.AddFileSaveAsItem2`
- `ISldWorks.RemoveFileSaveAsItem2`