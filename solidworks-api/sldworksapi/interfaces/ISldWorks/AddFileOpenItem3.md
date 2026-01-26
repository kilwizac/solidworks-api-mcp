---
type: method
interface: ISldWorks
member: AddFileOpenItem3
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: MethodName
    type: System.String
    description: Name of the application function used to open the file (see Remarks )
  -
    name: Description
    type: System.String
    description: File description displayed in the Save as type list
  -
    name: Extension
    type: System.String
    description: File name extensions separated by semicolons
  -
    name: OptionLabel
    type: System.String
    description: Label for your options button or an empty string
  -
    name: OptionMethodName
    type: System.String
    description: Name of the callback method to display a dialog box, which appears when a user clicks your options button or an empty string
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
  - ISldWorks.RemoveFileOpenItem2
  - ISldWorks.RemoveFileSaveAsItem2
keywords:
  - filename
  - extensions
  - add
  - file
  - open
  - addfileopenitem3
  - isldworks
  - sld
  - works
  - item3
  - cookie
  - int32
  - name
  - string
  - description
  - extension
  - option
  - label
  - boolean
  - remove
  - items
  - save
  - menus
  - vb
  - net
---

# ISldWorks.AddFileOpenItem3

Adds file types to the File &gt; Open dialog box.

## Signature

```csharp
System.Boolean AddFileOpenItem3( 
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
,
   System.String
OptionLabel
,
   System.String
OptionMethodName
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `MethodName` (System.String): Name of the application function used to open the file (see Remarks )
- `Description` (System.String): File description displayed in the Save as type list
- `Extension` (System.String): File name extensions separated by semicolons
- `OptionLabel` (System.String): Label for your options button or an empty string
- `OptionMethodName` (System.String): Name of the callback method to display a dialog box, which appears when a user clicks your options button or an empty string

## Return Value

True if the file types are added to the Save as type list, false if not

## Remarks

Call this method in your add-in's ConnectToSW method.
Implement the function specified by MethodName with a string parameter that is the file name.
If your application is unloaded using an add-in, then you must remove any file types added with this method. See
ISldWorks::RemoveFileOpenItem2
.
The callback is called one time if the user:
Presses the Shift or Ctrl key and selects multiple files to open in the
File > Open
Dialog.
Drags-and-drops files into SOLIDWORKS from either File Explorer or the File Explorer tab in the TaskPane.

## Examples

- Add and Remove Items to File Save As and Open Menus (VB.NET) (Add_and_Remove_Items_to_File_Save_As_and_Open_Menus_VBNET.htm)
- Add and Remove Items to File Save As and Open Menus (C#) (Add_and_Remove_Items_to_File_Save_As_and_Open_Menus_CSharp.htm)

## See Also

- `ISldWorks.AddFileSaveAsItem2`
- `ISldWorks.RemoveFileOpenItem2`
- `ISldWorks.RemoveFileSaveAsItem2`