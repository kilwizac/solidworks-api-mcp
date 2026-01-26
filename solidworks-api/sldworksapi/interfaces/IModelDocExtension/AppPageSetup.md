---
type: property
interface: IModelDocExtension
member: AppPageSetup
returns: PageSetup
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - page
  - setup
  - see
  - also
  - ipagesetup
  - documents
  - apppagesetup
  - imodeldocextension
  - model
  - doc
  - extension
  - app
  - whether
  - draft
  - edges
  - scaled
  - printed
  - drawing
  - vb
  - net
  - vba
readonly: true
---

# IModelDocExtension.AppPageSetup

Gets the SOLIDWORKS Design application page setup interface for this document.

## Signature

```csharp
PageSetup AppPageSetup {get;}
```
## Parameters

None.

## Return Value

Page setup object for SOLIDWORKS Design

## Remarks

The page setup object used when printing depends on a document setting, which indicates whether to use the application page setup, the page setup for this document.
To...
Use...
Get or set a document setting
IModelDocExtension::UsePageSetup
Get the document page setup
IModelDoc2::PageSetup
or
IModelDoc2::IPageSetup
Get the sheet page setup
ISheet::PageSetup
or
ISheet::IPageSetup
Although the object that this property returns indicates that it contains application-level values, some of the values that it contains depend on the type of document. Therefore, this API is on a document interface, and you should retrieve a different one for each different document that you print.
This property is read only.

## Examples

- Get Whether Draft Edges Scaled in Printed Drawing (C#) (Get_Whether_Draft_Edges_Scaled_in_Printed_Drawing_Example_CSharp.htm)
- Get Whether Draft Edges Scaled in Printed Drawing (VB.NET) (Get_Whether_Draft_Edges_Scaled_in_Printed_Drawing_Example_VBNET.htm)
- Get Whether Draft Edges Scaled in Printed Drawing (VBA) (Get_Whether_Draft_Edges_Scaled_in_Printed_Drawing_Example_VB.htm)