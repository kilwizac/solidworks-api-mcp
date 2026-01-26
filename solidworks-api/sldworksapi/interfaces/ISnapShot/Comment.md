---
type: property
interface: ISnapShot
member: Comment
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - comment
  - isnapshot
  - snap
  - shot
  - string
  - open
  - assembly
  - large
  - design
  - review
  - mode
  - vba
  - vb
  - net
readonly: null
---

# ISnapShot.Comment

Gets or sets the comment on this snapshot.

## Signature

```csharp
System.String Comment {get; set;}
```
## Parameters

None.

## Return Value

Comment (see Remarks )

## Remarks

To add a time stamp to the comment, prepend the comment string with "<TS>".
For example:
snap1.Comment = "<TS> This is a comment for SnapShot1"
generates:
07/29/2011 04:08 PM
user_id
:   This is a comment for SnapShot1

## Examples

- Open Assembly in Large Design Review Mode (VBA) (Open_Assembly_in_Large_Design_Review_Mode_Example_VB.htm)
- Open Assembly in Large Design Review Mode (VB.NET) (Open_Assembly_in_Large_Design_Review_Mode_Example_VBNET.htm)
- Open Assembly in Large Design Review Mode (C#) (Open_Assembly_in_Large_Design_Review_Mode_Example_CSharp.htm)