---
type: property
interface: ICallout
member: IgnoreValue
returns: System.Boolean
parameters:
  -
    name: RowID
    type: System.Int32
    description: Index of callout row
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - ignorevalue
  - icallout
  - callout
  - ignore
  - value
  - row
  - id
  - int32
  - boolean
  - create
  - independent
  - selection
  - vba
  - vb
  - net
readonly: null
---

# ICallout.IgnoreValue

Gets or sets whether to ignore the callout value in the given row.

## Signature

```csharp
System.Boolean IgnoreValue( 
   System.Int32
RowID
) {get; set;}
```
## Parameters

- `RowID` (System.Int32): Index of callout row

## Return Value

True to ignore callout value, false to not

## Remarks

Use this API to remove the white space that remains in the callout when
ICallout::Value
is set to an empty string.
This property applies only to a callout that is independent of a selection or created with
IModelDocExtension::CreateCallout
.

## Examples

- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)