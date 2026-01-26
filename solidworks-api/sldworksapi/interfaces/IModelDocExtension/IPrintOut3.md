---
type: method
interface: IModelDocExtension
member: IPrintOut3
returns: void
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of pages to print (see Remarks )
  -
    name: PageArray
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of range of pages to print (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Copies
    type: System.Int32
    description: Number of copies to print
  -
    name: Collate
    type: System.Boolean
    description: True to collate copies, false to not
  -
    name: Printer
    type: System.String
    description: Name of the printer queue (see Remarks )
  -
    name: PrintFileName
    type: System.String
    description: Name of file to print to instead of Printer
  -
    name: ConvertToHighQuality
    type: System.Boolean
    description: Name of file to print to instead of Printer
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.PrintDirect
  - IModelDoc2.PrintPreview
  - IModelDocExtension.PrintOut3
  - IModelDocExtension.SaveAs
keywords:
  - document
  - print
  - documents
  - iprintout3
  - imodeldocextension
  - model
  - doc
  - extension
  - out3
  - array
  - size
  - int32
  - page
  - copies
  - collate
  - boolean
  - printer
  - string
  - file
  - name
  - convert
  - high
  - quality
  - void
---

# IModelDocExtension.IPrintOut3

Obsolete. Superseded by IModelDocExtension::PrintOut4.

## Signature

```csharp
void IPrintOut3( 
   System.Int32
ArraySize
,
   ref System.Int32
PageArray
,
   System.Int32
Copies
,
   System.Boolean
Collate
,
   System.String
Printer
,
   System.String
PrintFileName
,
   System.Boolean
ConvertToHighQuality
)
```
## Parameters

- `ArraySize` (System.Int32): Number of pages to print (see Remarks )
- `PageArray` (System.Int32): in-process, unmanaged C++: Pointer to an array of range of pages to print (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Copies` (System.Int32): Number of copies to print
- `Collate` (System.Boolean): True to collate copies, false to not
- `Printer` (System.String): Name of the printer queue (see Remarks )
- `PrintFileName` (System.String): Name of file to print to instead of Printer
- `ConvertToHighQuality` (System.Boolean): Name of file to print to instead of Printer

## Return Value

Unknown.

## Remarks

This method supports printing parts, assemblies, and both single and multisheet drawings.
PageArray and ArraySize
For a part or assembly, the ArraySize and PageArray arguments are ignored.
No dialogs or message boxes are displayed.
PageArray contains any number of pairs of values, each pair indicating the start page and end page of a range of pages to print. For example, to print sheets 1, 2, 3, 6, and 7 of a drawing, the array should contain 4 elements; 1, 3, 6, 7. This means to print pages 1-3 and 6-7.
A range can be 5, 5, which means to print just page 5. If the array contains only one value, only that page is printed. If that one element is 0, then all sheets are printed.
If ArraySize = 0 or PageArray argument is NULL, the all sheets are printed.
PrintFileName
To print to a file instead to a printer, set PrintFileName to a non-empty name.
If the PrintFileName is empty, then the document is printed to the printer specified in Printer.
If that string is empty, then the document is printed to the default printer for this document. Use
IModelDoc2::Printer
to get or set this value.

## See Also

- `IModelDoc2.PrintDirect`
- `IModelDoc2.PrintPreview`
- `IModelDocExtension.PrintOut3`
- `IModelDocExtension.SaveAs`