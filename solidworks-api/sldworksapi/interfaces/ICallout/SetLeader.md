---
type: method
interface: ICallout
member: SetLeader
returns: System.Boolean
parameters:
  -
    name: Visible
    type: System.Boolean
    description: True to display the leader, false to not (see Remarks )
  -
    name: Multiple
    type: System.Boolean
    description: True to display multiple leaders, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.GetLeader
keywords:
  - leaders
  - callouts
  - setleader
  - icallout
  - callout
  - leader
  - visible
  - boolean
  - multiple
  - create
  - independent
  - selection
  - vb
  - net
  - vba
---

# ICallout.SetLeader

Sets the leader properties of the callout.

## Signature

```csharp
System.Boolean SetLeader( 
   System.Boolean
Visible
,
   System.Boolean
Multiple
)
```
## Parameters

- `Visible` (System.Boolean): True to display the leader, false to not (see Remarks )
- `Multiple` (System.Boolean): True to display multiple leaders, false to not

## Return Value

True if the operation is successful, false if not

## Remarks

You can only use this method before the callout is shown or while the callout is hidden.
If Visible is set to false, then
ICallout::TargetStyle
is automatically set to swCalloutTargetStyle_None.

## Examples

- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)

## See Also

- `ICallout.GetLeader`