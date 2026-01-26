---
type: property
interface: IView
member: ReferencedDocument
returns: ModelDoc2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetReferencedModelName
  - IView.ReferencedConfiguration
  - IView.ReferencedConfigurationID
keywords:
  - document
  - drawing
  - views
  - see
  - also
  - iview
  - documents
  - view
  - referenceddocument
  - referenced
  - model
  - doc2
  - vba
  - body
  - vb
  - net
readonly: true
---

# IView.ReferencedDocument

Gets the document referenced by this drawing view.

## Signature

```csharp
ModelDoc2 ReferencedDocument {get;}
```
## Parameters

None.

## Return Value

Model document

## Remarks

Because section views do not have referenced documents, this method returns an empty string for this type of view. Instead, use
IView::GetBaseView
or
IView::IGetBaseView
to get the parent view of a section, and then get its referenced document from that view.

## Examples

- Get Document Referenced by Drawing View (VBA) (Get_Document_Referenced_by_Drawing_View_Example_VB.htm)
- Set Body for View (C#) (Set_Body_for_View_Example_CSharp.htm)
- Set Body for View (VB.NET) (Set_Body_for_View_Example_VBNET.htm)
- Set Body for View (VBA) (Set_Body_for_View_Example_VB.htm)

## See Also

- `IView.GetReferencedModelName`
- `IView.ReferencedConfiguration`
- `IView.ReferencedConfigurationID`