---
type: method
interface: ICallout
member: Display
returns: System.Boolean
parameters:
  -
    name: Display
    type: System.Boolean
    description: True to show the callout, false to hide it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - display
  - icallout
  - callout
  - boolean
  - create
  - independent
  - selection
  - vba
  - vb
  - net
---

# ICallout.Display

Shows or hides the independent (i.e., not attached to a selection) callout.

## Signature

```csharp
System.Boolean Display( 
   System.Boolean
Display
)
```
## Parameters

- `Display` (System.Boolean): True to show the callout, false to hide it

## Return Value

True if the operation is successful, false if not

## Examples

- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)