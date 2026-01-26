---
type: property
interface: ICallout
member: SkipColon
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.Label2
keywords:
  - skipcolon
  - icallout
  - callout
  - skip
  - colon
  - boolean
  - create
  - independent
  - selection
  - vba
  - vb
  - net
readonly: null
---

# ICallout.SkipColon

Gets and sets whether to add a colon at the end of the callout label.

## Signature

```csharp
System.Boolean SkipColon {get; set;}
```
## Parameters

None.

## Return Value

False to add a colon, true to not

## Remarks

This property applies only to a callout that is independent of a selection or created with
IModelDocExtension::CreateCallout
.

## Examples

- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)

## See Also

- `ICallout.Label2`