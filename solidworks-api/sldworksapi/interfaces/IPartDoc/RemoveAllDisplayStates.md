---
type: method
interface: IPartDoc
member: RemoveAllDisplayStates
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IConfigurationManager.LinkDisplayStatesToConfigurations
keywords:
  - parts
  - see
  - also
  - ipartdoc
  - display
  - states
  - removealldisplaystates
  - part
  - doc
  - remove
  - all
  - boolean
  - clear
  - vba
  - vb
  - net
---

# IPartDoc.RemoveAllDisplayStates

Removes all display states and appearances from this part document.

## Signature

```csharp
System.Boolean RemoveAllDisplayStates()
```
## Parameters

None.

## Return Value

True if successful, false if not

## Remarks

Call this method to:
Remove all appearances from all configurations of this part.
Remove all display states except the active display state.
Un-link display states from configurations.
Show all hidden features.

## Examples

- Clear Display States (VBA) (Clear_Display_States_Example_VB.htm)
- Clear Display States (VB.NET) (Clear_Display_States_Example_VBNET.htm)
- Clear Display States (C#) (Clear_Display_States_Example_CSharp.htm)

## See Also

- `IConfigurationManager.LinkDisplayStatesToConfigurations`