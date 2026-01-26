---
type: method
interface: IModelDocExtension
member: PrintOut4
returns: void
parameters:
  -
    name: Printer
    type: System.String
    description: Name of the printer to which to print (see Remarks )
  -
    name: PrintFileName
    type: System.String
    description: Name of file to which to print (see Remarks )
  -
    name: PrintSpecification
    type: System.Object
    description: IPrintSpecification (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.ClosePrintPreview
  - IModelDoc2.PrintDirect
  - IModelDoc2.PrintPreview
  - IModelDocExtension.SaveAs
keywords:
  - document
  - print
  - documents
  - printout4
  - imodeldocextension
  - model
  - doc
  - extension
  - out4
  - printer
  - string
  - file
  - name
  - specification
  - object
  - void
  - drawing
  - vba
  - vb
  - net
---

# IModelDocExtension.PrintOut4

Prints this document without displaying any dialogs or message boxes.

## Signature

```csharp
void PrintOut4( 
   System.String
Printer
,
   System.String
PrintFileName
,
   System.Object
PrintSpecification
)
```
## Parameters

- `Printer` (System.String): Name of the printer to which to print (see Remarks )
- `PrintFileName` (System.String): Name of file to which to print (see Remarks )
- `PrintSpecification` (System.Object): IPrintSpecification (see Remarks )

## Return Value

Unknown.

## Remarks

This method supports printing parts, assemblies, and both single and multisheet drawings.
Before calling this method:
Call
IModelDocExtension::GetPrintSpecification
to get the IPrintSpecification object for this document.
Set
IPrintSpecification::PrintToFile
to:
true to print to PrintFileName.
false to print to Printer.
Set other properties on the IPrintSpecification object.
Use the IPrintSpecification object to specify PrintSpecification.
If Printer, PrintFileName, and PrintSpecification are not specified, then this method prints to the default printer specified by
IModelDoc2::Printer
.

## Examples

- Print Drawing (VBA) (Print_Drawing_as_High_Quality_Example_VB.htm)
- Print Drawing (VB.NET) (Print_Drawing_as_High_Quality_Example_VBNET.htm)
- Print Drawing (C#) (Print_Drawing_as_High_Quality_Example_CSharp.htm)

## See Also

- `IModelDoc2.ClosePrintPreview`
- `IModelDoc2.PrintDirect`
- `IModelDoc2.PrintPreview`
- `IModelDocExtension.SaveAs`