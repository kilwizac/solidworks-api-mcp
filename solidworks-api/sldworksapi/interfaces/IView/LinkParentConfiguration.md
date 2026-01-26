---
type: property
interface: IView
member: LinkParentConfiguration
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - linkparentconfiguration
  - iview
  - view
  - link
  - parent
  - configuration
  - boolean
  - projected
  - vb
  - net
  - vba
readonly: null
---

# IView.LinkParentConfiguration

Gets or sets whether to link a projected or auxiliary view with the parent configuration.

## Signature

```csharp
System.Boolean LinkParentConfiguration {get; set;}
```
## Parameters

None.

## Return Value

True to link a projected or auxiliary view with the parent configuration, false to not

## Remarks

After setting this property, call
IModelDoc2::EditRebuild3
.

## Examples

- Link Projected View to Parent Configuration (C#) (Link_Projected_View_to_Parent_Configuration_Example_CSharp.htm)
- Link Projected View to Parent Configuration (VB.NET) (Link_Projected_View_to_Parent_Configuration_Example_VBNET.htm)
- Link Projected View to Parent Configuration (VBA) (Link_Projected_View_to_Parent_Configuration_Example_VB.htm)