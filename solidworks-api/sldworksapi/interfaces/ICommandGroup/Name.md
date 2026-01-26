---
type: property
interface: ICommandGroup
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - name
  - icommandgroup
  - command
  - group
  - string
readonly: true
---

# ICommandGroup.Name

Gets the name of the CommandGroup.

## Signature

```csharp
System.String Name {get;}
```
## Parameters

None.

## Return Value

Name of the CommandGroup that corresponds to the name specified in ICommandManager::AddContextMenu , and ICommandManager::CreateCommandGroup .

## Remarks

If you used
ICommandManager::GetGroups
or
ICommandManager::IGetGroups
, then use this property to get the specific CommandGroup with which you want to work.