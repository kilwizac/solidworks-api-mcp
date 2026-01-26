---
type: method
interface: IModelDocExtension
member: Compare3DPMI
returns: System.Boolean
parameters:
  -
    name: ReferenceDocument
    type: System.String
    description: Path and file name of the open part document
  -
    name: ModifiedDocument
    type: System.String
    description: Path and file name of a different and open version of ReferenceDocument
  -
    name: ReportName
    type: System.String
    description: Name for the report and name of the folder to which to save the report and bitmap image files
  -
    name: ReportFolderPath
    type: System.String
    description: Path to the folder specified in ReportName in which to save the report and bitmap image files
  -
    name: ReportSaveOptions
    type: System.Int32
    description: Save options for the report as defined in sw3DPMISaveOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - parts
  - see
  - also
  - ipartdoc
  - compare
  - model
  - documents
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - mbd
  - product
  - manufacturing
  - information
  - pmi
  - dimxpert
  - annotations
  - dimensions
  - annotation
  - iannotation
  - dimension
  - idimension
  - reference
  - compare3dpmi
  - doc
  - extension
  - compare3
  - dpmi
  - document
  - string
  - modified
  - report
  - name
  - folder
  - path
  - save
  - options
  - int32
  - boolean
  - different
  - versions
  - same
  - part
  - vb
  - net
  - vba
---

# IModelDocExtension.Compare3DPMI

Compare DimXpert annotations, reference dimensions, and other annotations between different versions of the same part document.

## Signature

```csharp
System.Boolean Compare3DPMI( 
   System.String
ReferenceDocument
,
   System.String
ModifiedDocument
,
   System.String
ReportName
,
   System.String
ReportFolderPath
,
   System.Int32
ReportSaveOptions
)
```
## Parameters

- `ReferenceDocument` (System.String): Path and file name of the open part document
- `ModifiedDocument` (System.String): Path and file name of a different and open version of ReferenceDocument
- `ReportName` (System.String): Name for the report and name of the folder to which to save the report and bitmap image files
- `ReportFolderPath` (System.String): Path to the folder specified in ReportName in which to save the report and bitmap image files
- `ReportSaveOptions` (System.Int32): Save options for the report as defined in sw3DPMISaveOptions_e

## Return Value

True if the method executed, false if not

## Examples

- Compare DimXpert Annotations in Different Versions of Same Part (C#) (Compare_DimXpert_Annotations_in_Different_Versions_of_Same_Part_Example_CSharp.htm)
- Compare DimXpert Annotations in Different Versions of Same Part (VB.NET) (Compare_DimXpert_Annotations_in_Different_Versions_of_Same_Part_Example_VBNET.htm)
- Compare DimXpert Annotations in Different Versions of Same Part (VBA) (Compare_DimXpert_Annotations_in_Different_Versions_of_Same_Part_Example_VB.htm)