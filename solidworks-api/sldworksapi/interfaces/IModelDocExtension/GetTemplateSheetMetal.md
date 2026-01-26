---
type: method
interface: IModelDocExtension
member: GetTemplateSheetMetal
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - sheet
  - metal
  - isheetmetalfeaturedata
  - sheetmetalfeaturedata
  - gettemplatesheetmetal
  - imodeldocextension
  - model
  - doc
  - extension
  - template
  - object
  - data
  - vba
  - vb
  - net
---

# IModelDocExtension.GetTemplateSheetMetal

Gets the sheet metal folder feature from this sheet metal model created in SOLIDWORKS 2013 or later.

## Signature

```csharp
System.Object GetTemplateSheetMetal()
```
## Parameters

None.

## Return Value

IFeature ; Null if this model was created with SOLIDWORKS 2012 or earlier

## Remarks

This method works only on sheet metal models created with SOLIDWORKS 2013 or later. To obtain sheet metal feature data for earlier models, follow the examples of
ISheetMetalFeatureData
.

## Examples

- Get Sheet Metal Feature Data (VBA) (Get_Template_Sheet_Metal_Feature_Data_Example_VB.htm)
- Get Sheet Metal Feature Data (VB.NET) (Get_Template_Sheet_Metal_Feature_Data_Example_VBNET.htm)
- Get Sheet Metal Feature Data (C#) (Get_Template_Sheet_Metal_Feature_Data_Example_CSharp.htm)