---
type: method
interface: ISldWorks
member: AddFileSaveAsItem2
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: MethodName
    type: System.String
    description: Name of the application function used to save the file (see Remarks )
  -
    name: Description
    type: System.String
    description: File description in the Save as type list
  -
    name: Extension
    type: System.String
    description: File name extension
  -
    name: DocumentType
    type: System.Int32
    description: Type of document to save as defined in swDocumentTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.AddFileOpenItem3
  - ISldWorks.RemoveFileOpenItem2
keywords:
  - filename
  - extensions
  - add
  - saveas
  - addfilesaveasitem2
  - isldworks
  - sld
  - works
  - file
  - save
  - item2
  - cookie
  - int32
  - name
  - string
  - description
  - extension
  - document
  - type
  - boolean
  - remove
  - items
  - open
  - menus
  - vb
  - net
---

# ISldWorks.AddFileSaveAsItem2

Adds a file type to the SOLIDWORKS File &gt; Save As dialog box.

## Signature

```csharp
System.Boolean AddFileSaveAsItem2( 
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
   System.Int32
DocumentType
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `MethodName` (System.String): Name of the application function used to save the file (see Remarks )
- `Description` (System.String): File description in the Save as type list
- `Extension` (System.String): File name extension
- `DocumentType` (System.Int32): Type of document to save as defined in swDocumentTypes_e

## Return Value

True if the file type is added to the Save as type list, false if not

## Remarks

Call this method in your add-in's ConnectToSW method.
Implement the function specified by MethodName with a string parameter that is the file name.
If your application is unloaded using the Add-In Manager, then you must remove any file types added with this method using
ISldWorks::RemoveFileSaveAsItem2
.

## Examples

- Add and Remove Items to File Save As and Open Menus (VB.NET) (Add_and_Remove_Items_to_File_Save_As_and_Open_Menus_VBNET.htm)
- Add and Remove Items to File Save As and Open Menus (C#) (Add_and_Remove_Items_to_File_Save_As_and_Open_Menus_CSharp.htm)

## See Also

- `ISldWorks.AddFileOpenItem3`
- `ISldWorks.RemoveFileOpenItem2`