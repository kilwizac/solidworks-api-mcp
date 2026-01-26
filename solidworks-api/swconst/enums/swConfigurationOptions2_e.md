---
type: enum
name: swConfigurationOptions2_e
description: Option bits used when setting configuration options. Bitmask.
member_count: 10
docset: swconst
categories:
  - constants
used_by: []
---

# swConfigurationOptions2_e

Option bits used when setting configuration options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swConfigOption_DoDisolveInBOM` | 256 | or 0x100; True to dissolve the configuration in the BOM and promote all of its child components up one level, false to not |
| `swConfigOption_DontActivate` | 128 | or 0x80; True to not activate the configuration, false to activate the configuration |
| `swConfigOption_DontShowPartsInBOM` | 2 | or 0x2; True to show sub-assemblies in the Bill of Materials, false to list child components in the Bill of Materials |
| `swConfigOption_HideByDefault` | 8 | or 0x8; True to hide newly added components, false to not |
| `swConfigOption_InheritProperties` |  | Obsolete |
| `swConfigOption_LinkToParent` | 64 | or 0x40; True to link component to parent configuration, false to not |
| `swConfigOption_MinFeatureManager` | 16 | or 0x10; True to suppress new components, false to not |
| `swConfigOption_SuppressByDefault` | 4 | or 0x4; True to suppress newly added features and mates in this configuration, false to not |
| `swConfigOption_UseAlternateName` | 1 | or 0x1; True to use an alternate configuration name, false to not |
| `swConfigOption_UseDescriptionInBOM` | 512 | or 0x200; True to use the description in the BOM, false to not |