---
type: property
interface: ICallout
member: TextBox
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - textbox
  - icallout
  - callout
  - text
  - box
  - boolean
  - create
  - independent
  - selection
  - vb
  - net
  - vba
readonly: null
---

# ICallout.TextBox

Gets or sets whether the callout text is enclosed within a box.

## Signature

```csharp
System.Boolean TextBox {get; set;}
```
## Parameters

None.

## Return Value

True encloses the callout text in a box, false does not

## Remarks

You can only set this property before the callout is shown or while the callout is hidden.

## Examples

- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)